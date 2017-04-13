const shell = require('shelljs');
const fs = require('fs');
const sleep = require('sleep');
const recursive_dir = require('recursive-readdir');

var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var team = JSON.parse(fs.readFileSync('team.json', 'utf8'));

// Reading config
let path = config["project_path"];
let even_distribution = config["even_distribution"];
let new_repo_address = config["new_repo_address"];
let git_name = config["default_git_name"];
let git_email = config["default_git_email"];
let start_date = config["start_date"];
let end_date = config["end_date"];

// Setting up

exec("cd \"" + path + "\" ; rm -rf .git");

recursive_dir(path, function (err, files) {

  // Start assigning files to team members

  files.forEach(function(file, i, arr) {
    let team_member;

    if (even_distribution) {
      team_member = i % team.length;
    } else {
      team_member = getRandomInt(0, team.length);
    }

    if (team[team_member]["files"] == undefined) {
      team[team_member]["files"] = [file];
    } else {
      team[team_member]["files"].push(file);
    }

  });

  // End assigning files to team members

  // Commiting

  exec("cd \"" + path + "\" ; git init");

  team.forEach(function(member, i, arr) {
    commitAllFilesForMember(member, i);
    sleep.sleep(1);
  });

  // Uploading

  exec("git config --global user.name \"" + git_name + "\"");
  exec("git config --global user.email \"" + git_email + "\"");
  exec("cd \"" + path + "\" ; git remote add origin " + new_repo_address);
  exec("cd \"" + path + "\" ; git push -u origin master -f");

});

// Utility functions

function commitAllFilesForMember(member, member_index) {
  exec("git config --global user.name \"" + member["name"] + "\"");
  exec("git config --global user.email \"" + member["email"] + "\"");

  let files = member["files"];

  let all_commits = "";

  files.forEach(function(file, i, arr) {
    let commit_time = getRandomInt(start_date, end_date)

    let date = getFormattedDate(commit_time);

    let dateCommand = "date " + date;
    exec(dateCommand);

    let commit_command = "cd \"" + path + "\" ; git add \"" + file + "\" && git commit -m \"" + file + "\"";
    exec(commit_command);
  });
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getFormattedDate(timestamp) {
  let date = new Date(timestamp);

  let month = (date.getMonth() + 1) + "";
  let day = date.getDate().toString();
  let hour = date.getHours().toString();
  let minute = date.getMinutes().toString();
  let year = (date.getFullYear() % 2000).toString();

  if (month.length == 1) {
    month = "0" + month;
  }

  if (day.length == 1) {
    day = "0" + day;
  }

  if (hour.length == 1) {
    hour = "0" + hour;
  }

  if (minute.length == 1) {
    minute = "0" + minute;
  }

  if (year.length == 1) {
    year = "0" + year;
  }

  return month + day + hour + minute + year;
}

function exec(command) {
  console.log("Executing " + command);
  let code = shell.exec(command).code;
  console.log("Status: " + code);
}
