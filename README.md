Lab-Maintainer
================
It is a specific oriented WEB project for Company Laboratory built for simplify detectors enrollment and attaching them
to the Power Max systems. Lab-Maintainer consists of reusable 
[Pintura](http://www.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=pintura&sll=40.554798,-111.881839&sspn=0.009211,0.016351&ie=UTF8&hq=&hnear=Pintura,+Washington,+Utah&ll=37.31666,-113.171539&spn=0.308538,0.523224&t=p&z=11) modules and 
[Perstore](http://github.com/persvr/perstore) it can be used on any 
JSGI compliant JavaScript platform, but is tested on NodeJS.

Pre setup requirements:
=======================
You should have installed mongodb.
[installation instructions](http://docs.mongodb.org/manual/installation/)


Setup Lab-Maintainer
=================

$ git clone https://github.com/Spalax/lab-maintainer.git lab-maintainer

$ cd lab-maintainer

$ npm install

$ git submodules init

$ git submodule update

Run Lab-Maintainer
==============================

$ node index.js

Type in your browser http://localhost:8080
