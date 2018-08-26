var app = new Vue({
    el: '#app',
    data: {
        heading: 'Checklist for Django, REST, Vue quickstart:',
				query: '',
				results: [],
        toDos: [
            {'textForToDo': 'Create a new project directory where you want to store your project and cd into it:\n> mkdir project_dir_name\n> cd project_dir_name', 'completed': false},
						{'textForToDo': 'Create a new virtual environment:\n> virtualenv ENV', 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': 'Enter your virtual environment (mac):\n> source ENV/bin/activate', 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': 'Install all the dependencies for your project:\n> pip install django==2.0.0', 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': 'Export your packages:\n> pip freeze > requirements.txt', 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': 'Create a site/project: django-admin startproject <site/project name>', 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "Move into the site's directory: cd <site/project name>", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': 'Run migrations to create the database and user system: python manage.py migrate', 'completed': false, 'relevant_to': 'basic Django'},
            {'textForToDo': 'Create an admin account: python manage.py createsuperuser', 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': 'Create an app: python manage.py startapp <app-name>', 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': 'Add your app (app_name.apps.AppNameConfig) to the INSTALLED_APPS in settings.py', 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "In your app's views.py:\nfrom django.http import HttpResponse\ndef <viewname>(request):\n\treturn HttpResponse('ok')", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': 'Create a urls.py inside your app', 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "Add a <b>route</b> in your app's urls.py which points to the the view, then add an <b>app_name</b> to be able to look up paths when you render a template:\n\nfrom django.urls import path\nfrom . import views\n\napp_name = '<app name>' # for namespacing \nurlpatterns = [\n\tpath('<path>', views.<viewname>, name='<viewname>')\n]", 'completed': true, 'relevant_to': 'rest'},
						{'textForToDo': "Add a route in your <b>project's urls.py</b> which points to the app's urls.py using include:\n\nfrom django.urls import path, include\nfrom django.contrib import admin\n\nurlpatterns = [\n\tpath('admin/',admin.site.urls),\n\tpath('<path>/',include('<appname>.urls')) # Note: all your app urls will start with this path\n]", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "At this point, you should run the server (python manage.py runserver) and go to localhost:8000/app_path/view_path and verify that you can access the view.", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "Define your models (Python classes) in the <b>app's models.py</b>", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "Stage your migrations: python manage.py makemigrations <appname>", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "Perform migrations: python manage.py migrate", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "Add a def __str__(self): to your model so the admin interface knows how to display it.", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "Register your models with your <b>app's admin.py</b>:\nfrom django.contrib import admin\nfrom .models import <model name 1> <model name 2>\nadmin.site.register(<model name 1>)\nadmin.site.register(<model name 2>)", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "Go to localhost:8000/admin in your browser, and add some data", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "Create template: app_name/templates/app_name/<filename>.html", 'completed': true, 'relevant_to': 'rest'},
						{'textForToDo': "Inside your view, you can use the render shortcut to render a template. The first parameter is the request, the second parameter is the name of the template, and the third is a dictionary containing the values you'd like to render in the template:\n\nfrom django.shortcuts import render\n\ndef <view name>(request):\n\tcontext = {<name-value pairs>}\nreturn render(request, '<app name>/<template name>.html', context)", 'completed': true, 'relevant_to': 'rest'},
						{'textForToDo': "In settings.py:\n\nTEMPLATES = [\n\t{\n\t\t'DIRS': [os.path.join(BASE_DIR, 'templates')],\n\t}\n]", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "In settings.py:\n\nSTATIC_URL = '/static/'\nSTATICFILES_DIRS = (\n\tos.path.join(BASE_DIR, 'static'),\n\tos.path.join(\n\tos.path.dirname(__file__),\n\t'static',\n\t),\n)", 'completed': false, 'relevant_to': 'basic Django'},
						{'textForToDo': "test Test", 'completed': false},
						{'textForToDo': `Create a <b>serializers.py</b> inside your <b>app</b>\nfrom rest_framework import serializers\nfrom .models import <b>Model1</b>, <b>Model2</b>\n\nclass <b>Model1</b>Serializer(serializers.HyperlinkedModelSerializer):\n\tclass Meta:\n\t\tmodel = <b>Model1</b>\n\t\tfields = ('__all__')\n\n\nclass <b>Model2</b>Serializer(serializers.HyperlinkedModelSerializer):\n\tclass Meta:\n\t\tmodel = <b>Model2</b>\n\t\tfields = ('__all__')\n\t\t`, 'completed': false, 'relevant_to': 'rest'},
						{'textForToDo': `Add the following views to your <b>app views.py</b>:

from rest_framework import viewsets
from .models import <b>Model1</b>, <b>Model2</b>
from .serializers import <b>Model1</b>Serializer, <b>Model2</b>Serializer


class <b>Model1</b>ViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows <b>Model1</b> instances to be viewed or edited.
    """
    queryset = <b>Model1</b>.objects.all().order_by('-date_joined')
    serializer_class = <b>Model1</b>Serializer


class <b>Model2</b>ViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows <b>Model2</b> to be viewed or edited.
    """
    queryset = <b>Model2</b>.objects.all()
    serializer_class = <b>Model2</b>Serializer`, 'completed': false, 'relevant_to': 'rest'},
						{'textForToDo': `Set up the API URLs in the <b>app's urls.py</b> (you may have to make a urls.py if you haven't already. Also note that the r'models' is pluralized.):

from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'<b>model1s</b>', views.<b>Model1</b>ViewSet)
router.register(r'<b>model2s</b>', views.<b>Model2</b>ViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]`, 'completed': false, 'relevant_to': 'rest'},
						{'textForToDo': `Add 'rest_framework' to INSTALLED_APPS in the <b>site's settings.py</b>:
INSTALLED_APPS = (
    ...
    'rest_framework',
)`, 'completed': false, 'relevant_to': 'rest'},
						{'textForToDo': `Add Django Rest framework to the <b>sites settings.py</b>:
REST_FRAMEWORK = {
	'DEFAULT_PERMISSION_CLASSES': [
		'rest_framework.permissions.AllowAny',
	],
	'DEFAULT_AUTHENTICATION_CLASSES': [
		'rest_framework.authentication.BasicAuthentication',
	],
}
`, 'completed': false, 'relevant_to': 'rest'},
						{'textForToDo': `Make sure to install the REST framework in your virtual enviornment using:
> pip3 install djangorestframework`, 'completed': false, 'relevant_to': 'rest'},

						{'textForToDo': `You may still need to add the namespacing to the <b>app's urls.py</b>?:
						app_name = '<app name>'`, 'completed': false, 'relevant_to': 'rest'},
						{'textForToDo': ``, 'completed': false, 'relevant_to': 'rest'},

						{'textForToDo': `At this point you should be able to access the API directly through the browser, by going to localhost:8000/<b>model</b>`, 'completed': false, 'relevant_to': 'rest'},
						{'textForToDo': ``, 'completed': false, 'relevant_to': 'rest'},


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
					if (this.query != ''){
						let query = this.query
						this.results = this.toDos.filter(function(el) {
							var x = el.textForToDo
							return el.textForToDo.toLowerCase().indexOf(query.toLowerCase()) > -1;
						})
					}
					else {
						this.results = []
					}

				}
		}
});
