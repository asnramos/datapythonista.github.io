Title: Unable to define my urls exactly my way (resignation statement)
Author: Marc
Date: 2008-05-09 19:44:00
Slug: unable-to-define-my-urls-exactly-my-way
Tags: Applications,Django,IT

I've been working with Django for a while, and it helped me to get all my web developments with nice urls. But I also wanted a nice url structure...<br/><br/>What it is nice for me, opposite to Django default settings, is avoiding the media prefix on my media urls, so<br/><br/>http://localhost/media/admin/css/login.css would be http://localhost/admin/css/login.cssTrying to emulate old website structures (used widely in php sites).<br/><br/>That could be nice or not, but for sure it is complicated.<br/><br/>The first step was to setup apache for it, a little bit more complicated than the usual setup, but possible:<br/><br/><LocationMatch "/((css|js|img|swf|pdf)/|favicon.ico)"><br/>SetHandler None<br/></LocationMatch><br/><br/>The main problem comes when using Django development http server (started by "python manage.py runserver"), and the admin. Of course you can do that, but what is not possible, is to define the same name for your admin media path, and for the admin itself.<br/><br/>For example:<br/><br/>http://localhost/admin and http://localhost/admin/css/login.css<br/><br/>The reason is the Django web server, processes all requests starting with the ADMIN_MEDIA_PREFIX setting with the AdminMediaHandler, what implies with that structure that all admin requests (even the ones that aren't static files) are processed by this handler, raising an error when the request isn't for a static file. The error is next.<br/><br/>Permission denied: ${PYTHON_PATH}/django/contrib/admin/media/<br/><br/>So this is my resignation statement to do what I wanted to do initially. Now, options are:<br/>- <br/>	<li>Don't use the Django http server (use apache even for development)</li><br/>	<li>Keep the same structure but change the admin media directory (for example from "admin" to "admin-media"</li><br/>	<li>Use the "media" (or any other name) prefix</li><br/>
<br/><strong>NOTE:</strong> Current version of my project DSNP is affected by this issue. I'll solve it asap.