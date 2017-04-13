<h1>autocommit</h1>

<h3>Requirements</h3>
<code>./bash</code>
<code>Node.js</code>

<h3>Getting Started:</h3>
<code>npm install<code>
<code>git clone https://github.com/LegacyNaUKMA/autocommit.git</code>

<h3>Project structure</h3>
<code>
|_assign_files.js
|_autocommit.js
|_config.json
|_team.json
|_node_modules
|	|_…
`
</code>
<h3>Set up</h3>

First you should edit your `config.json`:
<code>
{
  "project_path": "", <-- here goes path of the project you want to be committed
  "start_date": 0, <-- start date of your commits
  "end_date": 0, <-- end dates of your commits
  "default_git_name": "", <-- your git name (not username)
  "default_git_email": "", <-- your git mail
  "new_repo_address": “”, <-- repo you want to commit to  
  "even_distribution": false <-- even or uneven number of commits by each ‘team’ contributor
}
</code>

Then you should edit your ‘team.json’:
<code>
[{
	"email": “blah@baz.com",
	"name": “John Doe”,
	"files": []
}, {
	"email": “foo@baz.com",
	"name": “Vasya Pupkin”,
	"files": []
}, 
….
{
	"email": “bar@baz.com",
	"name": “Last Teammate”,
	"files": []
}]
</code>
Just add as much teammates as you need :)

<h3>Run&commiting</h3>

Just run:

`sudo node autocommit.js`

and relax… this script will do everything for you.

<h5>Don’t forget to change your default date time settings!</h5>

<h5>Runs only with `sudo`</h5>
