#! /home/xs-----/anaconda3/bin/python
from wsgiref.handlers import CGIHandler
from hello import app
CGIHandler().run(app)