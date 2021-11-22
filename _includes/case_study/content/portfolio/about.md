{%capture problem_statement%}
I start working with Squarespace to build a website, however it proved difficult to customise the template to match the vision for the portfolio.
As a result we decided to pivot towards building and implementing the website using the standard web technologies (HTML, CSS, and Javascript) and host it on Github pages. 
{%endcapture%}

{%capture context_statement%}
The first step was, know *why I'm building a portfolio?*
And the answer was because I wanted to change my career from being a Graphic Designer to a UX Designer.

The second step was, know *why I need a portfolio?*
To meet the current Industry standards and develop my skills and gain more practice and showcase my work.
{%endcapture%}

{%capture product_purpose%}
I worked on a:
 * User research
 * Design Template
 * Design system
 * Content creator
 
Format: webiste / responsive mobile
{%endcapture%}

{%
include sections/about.html
problem_statement=problem_statement
context_statement=context_statement
product_purpose=product_purpose
project_definitions="
Goal: Help a future employer understand how I think, my design process and my personality.  |
Challenge: Develop and deploy a fully functional portfolio website. That is intuitive, responsive and informative. |
Constraints: Ensure the website compatability on different browsers and devices and keeping the user engaged throughout each study case.
"
%}
