# autocommit

### Requirements

`bash`

`Node.js`

### Getting Started:

`git clone https://github.com/LegacyNaUKMA/autocommit.git`

`cd autocommit`

`npm install`


### Project structure

```
|_assign_files.js
|_autocommit.js
|_config.json
|_team.json
|_node_modules
|	|_…
```

### Set up

First you should edit your `config.json`:


```
{
  "project_path": "", <-- here goes path of the project you want to be committed
  "start_date": 0, <-- start date of your commits
  "end_date": 0, <-- end dates of your commits
  "default_git_name": "", <-- your git name (not username)
  "default_git_email": "", <-- your git mail
  "new_repo_address": “”, <-- repo you want to commit to  
  "even_distribution": false <-- even or uneven number of commits by each ‘team’ contributor
}
```


Then you should edit your `team.json`:

```
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
```

Just add as much teamates as you need :)

### Run&commiting:)

Just run:


`sudo node autocommit.js`


and relax… this script will do everything for you.

#### Don’t forget to change your default date time settings!

#### Runs only with `sudo`

