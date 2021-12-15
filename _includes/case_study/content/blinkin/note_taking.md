{%capture content%}
### Why I used this methodology

To take notes to highlight the key insights observed, during the session and watching the recording. Also to create a bank of insights for the next stages.

### Process
During this phase, I reviewed the usability test I recorded. My mission was take the most detailed notes a possible, focusing on built the user empathy detecting the:

* Needs, emotions, thoughts,motivations, what said and what do.
And also the user’s:
* Goals, behaviour, pain points and mental models.

### Findings
*  What they are unable to find on your site.
*  What is missing from your site.
*  What is unclear or vague.
*  What is causing friction or preventing them from converting.
### My hypothesis
Different search methods give very different results. By categories and filters it is the most accurate for the user, but also the one that consumes the most time. How can we make the search faster and more precise?
{%endcapture%}
{%
include components/content_section.html
title="Note-taking"
tools="Notion"
tools_explanations="More options for customization and easy to edit."
is_themed_section=true
content=content
diagram_img="note_taking/note_taking.png"
survey_answers='
"But it seems I have less options available if I do that kind of search and Filter than the previous one."|
"I wouldn\'t expect to have a shorts instead of a T-shirt or other product, or just and ad for other things but."|
"I will have to use additional filters to narrow the search for what I\'m looking for."
'
survey_titles="User test 1|User test 2|User test 3"
survey_subtexts="Zalando Search Filters|Zalando Search Toolbar|H&M Search Toolbar"
%}
