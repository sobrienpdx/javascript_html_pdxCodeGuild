var app = new Vue({
    el: '#app',
    data: {
        heading: 'Checklist for Django, REST, Vue quickstart:',
				query: '',
        toDos: [
            {'textForToDo': 'Create a new project directory where you want to store your project and cd into it:\n> mkdir project_dir_name\n> cd project_dir_name', 'completed': false},
						{'textForToDo': 'Create a new virtual environment:\n> virtualenv ENV', 'completed': false},
						{'textForToDo': 'Enter your virtual environment (mac):\n> source ENV/bin/activate', 'completed': false},
						{'textForToDo': 'Install all the dependencies for your project:\n> pip install django==2.0.0', 'completed': false},
						{'textForToDo': 'Export your packages:\n> pip freeze > requirements.txt', 'completed': false},
						{'textForToDo': 'Create a site/project: django-admin startproject <site/project name>', 'completed': false},
						{'textForToDo': "Move into the site's directory: cd <site/project name>", 'completed': false},
						{'textForToDo': 'Run migrations to create the database and user system: python manage.py migrate', 'completed': false},
            {'textForToDo': 'Create an admin account: python manage.py createsuperuser', 'completed': false},
						{'textForToDo': 'Create an app: python manage.py startapp <app-name>', 'completed': false},
						{'textForToDo': 'Add your app (app_name.apps.AppNameConfig) to the INSTALLED_APPS in settings.py', 'completed': false},
						{'textForToDo': "In your app's views.py:\nfrom django.http import HttpResponse\ndef <viewname>(request):\nreturn HttpResponse('ok')", 'completed': false},
						{'textForToDo': 'Create a urls.py inside your app', 'completed': false},
						{'textForToDo': "Add a route in your app's urls.py which points to the the view", 'completed': false},
						{'textForToDo': "Add an app_name to be able to look up paths when you render a template:\n\nfrom django.urls import path\nfrom . import views\n\napp_name = '<app name>' # for namespacing \nurlpatterns = [\n\tpath('<path>', views.<viewname>, name='<viewname>'\n])", 'completed': false},
						{'textForToDo': "Add a route in your project's urls.py which points to the app’s urls.py using include:\n\nfrom django.urls import path, include\nfrom django.contrib import admin\n\nurlpatterns = [\n\tpath('admin/',admin.site.urls),\n\tpath('<path>/',include('<appname>.urls')) # Note: all your app urls will start with this path\n]", 'completed': false},
						{'textForToDo': "At this point, you should run the server (python manage.py runserver) and go to localhost:8000/app_path/view_path and verify that you can access the view.", 'completed': false},
						{'textForToDo': "Define your models (Python classes) in the app’s models.py", 'completed': false},
						{'textForToDo': "Stage your migrations: python manage.py makemigrations <appname>", 'completed': false},
						{'textForToDo': "Perform migrations: python manage.py migrate", 'completed': false},
						{'textForToDo': "Add a def __str__(self): to your model so the admin interface knows how to display it.", 'completed': false},
						{'textForToDo': "Register your models with your app’s admin.py:\nfrom django.contrib import admin\nfrom .models import <model name 1> <model name 2>\nadmin.site.register(<model name 1>)\nadmin.site.register(<model name 2>)", 'completed': false},
						{'textForToDo': "Go to localhost:8000/admin in your browser, and add some data", 'completed': false},
						{'textForToDo': "Create template: app_name/templates/app_name/<filename>.html", 'completed': true},
						{'textForToDo': "Inside your view, you can use the render shortcut to render a template. The first parameter is the request, the second parameter is the name of the template, and the third is a dictionary containing the values you’d like to render in the template:\n\nfrom django.shortcuts import render\n\ndef <view name>(request):\n\tcontext = {<name-value pairs>}\nreturn render(request, '<app name>/<template name>.html', context)", 'completed': true},
						{'textForToDo': "In settings.py:\n\nTEMPLATES = [\n\t{\n\t\t'DIRS': [os.path.join(BASE_DIR, 'templates')],\n\t}\n]", 'completed': false},
						{'textForToDo': "In settings.py:\n\nSTATIC_URL = '/static/'\nSTATICFILES_DIRS = (\n\tos.path.join(BASE_DIR, 'static'),\n\tos.path.join(\n\tos.path.dirname(__file__),\n\t'static',\n\t),\n)", 'completed': false},
						{'textForToDo': "test Test", 'completed': false},
						{'textForToDo': "", 'completed': false},
						{'textForToDo': "", 'completed': false},



        ],
        textForToDo: '',

    },
    methods: {
        // addToDo: function() {
        //   console.log("you tried to add something")
        //   if (this.textForToDo){
        //     this.toDos.push({"textForToDo": this.textForToDo, "completed": false});
        //   }
        // },
        removeToDo: function(index) {
          console.log("you tried to remove it");
          this.toDos.splice(index, 1)
            // remove todo from this.todos
        },
        markDone: function(index) {
          console.log("you tried to mark it done")
          this.toDos[index].completed = !this.toDos[index].completed
            // mark todo as done
        },
				search: function() {
					let query = this.query
					this.toDos = this.toDos.filter(function(el) {
						var x = el.textForToDo
						return el.textForToDo.toLowerCase().indexOf(query.toLowerCase()) > -1;
					})
				}
		}
});
