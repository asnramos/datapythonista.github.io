Title: Successful delivery of data projects

# Successful delivery of data projects

![](/static/img/blog/data_projects/tower_bridge.jpeg)

This week we organized a round table with people involved in the management
of data projects. Mostly data science.

The idea came after the [Executives at PyData](https://pydata.org/london2019/schedule/presentation/61/executives-at-pydata/)
session organized earlier this year. And discussions with few people on the
challenges when trying to deliver data projects.

[Ian Ozvald](https://ianozsvald.com/), founder of PyData London, and organizer
of the PyData session was present. He's also a trainer and consultant specialized
in the topic (one of his courses is coincidentially named _Successful data science projects_),
so his participation was very appreciated. We also had [Mehmood Hassan](https://www.linkedin.com/in/mehmood-hassan7/)
a recruiter from [ECOM](https://www.interquestgroup.com/brands/ecom), who kindly
offered to host the session in their offices, and feed us during the event. :)
Mehmood contributions were also valuable, bringing a recruiter's point of view
in different topics.

The rest of attendees had different backgrounds, like lead data scientists,
project managers, and senior specialists in machine learning engineering.
They came from a diversity of industries, companies such as
[Lloyds Bank](https://en.wikipedia.org/wiki/Lloyds_Bank),
[Johnson & Johnson](https://en.wikipedia.org/wiki/Johnson_%26_Johnson),
[Mercado Libre](https://en.wikipedia.org/wiki/MercadoLibre),
[ITV](https://en.wikipedia.org/wiki/ITV_(TV_network)) or
[JP Morgan](https://en.wikipedia.org/wiki/J.P._Morgan_%26_Co.)
among others.

Next there is a summary of the discussions during the event. The topics were
proposed by the same attendees, before and during the event.

## Data teams

The first topic that was discussed was about the teams. One of the first
challenges is the current terminology. Data science roles are very broad
and can mean a variety of things depending on the company. While some
progress has been made (new roles like machine learning engineer), this is
still a challenge today.

There is a preference in many companies to try to hire people with an
unreasonable set of skills. From excellent software engineering skills,
to advanced knowledge of machine learning techniques, and great soft
skills. There is also a preference of companies to hire only senior
people, which makes things challenging in both sides (for candidates
and for companies).

One of the companies was using a (probably) rare role, that was a team
of experts with the goal of advising and auditing practices in the
data projects. Deciding on the feasibility of projects being considered,
the recruitment, the skills needed. It was described as similar to
project management, but with very high technical knowledge.

Having multiple skills in a team is also tricky. Projects that had only
data scientists doing everything (like productionizing) went wrong,
based on attendees experience. But there were different cases were
having separate teams (data scientists and devops for example) went
also wrong, because of the cultural gap. In some cases the development
ended up being more adversarial among them, than collaborative.

Regarding the leadership of the projects, many options seem to be
happening. Data science teams that take ownership of the projects,
and lead the development. Meaning that other teams (data engineering,
devops) report to them. Other cases the software development team
owns the project, and data scientists report to them. There are also
cases where the leadership is shared between technical and business
managers.

Participants have also shared accounts of spending quality time with
stakeholders not directly involved in the data work, like executives
or internal clients. Time spent on introducing concepts, plans, and 
getting feedback in an informal setting contributed to long term success,
i.e. made getting buy-in easier.

## Organization

![](/static/img/blog/data_projects/session1.jpeg)

For organizing the teams, the preference was to use Agile techniques as
a reference, but everybody agreed that using the same techniques used
for software engineering wasn't useful. Kanban, Scrum... were adapted
and in some cases the organization was just slightly inspired by them.

One of the variants was to use longer sprints than usual (assuming it's
usual to have two week sprints). The sprints were four weeks instead,
and they were divided in different stages. For example, the first
stage was analyzing the data and planning the next stages of the sprint.

Another variant was to use Scrum managing the uncertainty of data projects
by making hypothesis and assumptions. The length of the tasks, the quality
of the data... are estimated or assumed, the sprint is planned for that,
and for every wrong assumption and extra work, new tasks are added to
the backlog. This was successful for one team, but required the people
in the team to be senior and experienced.

The main goals by using these techniques, besides of course delivering
the expected results, were to have visibility of the development of
the project, and to estimate deadlines.

Agile techniques are often based on trying things fast, and failing
early. This often does not apply to data science projects, since they
may have a big overhead to get started. For example accessibility to
the data (regulated institutions may need long processes of approval).

## Technology

All companies were mainly using the PyData stack for the projects.
This is surely biased, given that the organization of the event, and
the promotion, came from people from the PyData community.

The preference was to develop the projects in shared infrastructure,
and not in the workstations. As an example, 8 Gb of RAM can be quiet
good for a workstation, but clearly insufficient for many data projects.
[Jupyter](https://jupyter.org/) was the main interface used, and as
said, having it on the servers and not locally (using Jupyter Hub)
as the preferred approach.

Some of the mentioned tools were:

- [pandas](https://pandas.pydata.org/)
- [scikit-learn](https://scikit-learn.org/stable/)
- [PyTorch](https://pytorch.org/)
- [fastText](https://fasttext.cc/)

And for productionizing, tools like Docker or Flask (creating
microservices) were named.

There was mostly agreement on building "from scratch" the platform using
these tools, and not using data frameworks with GUI...
[SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html)
was used in some cases.

Persistence of models is mainly done with Python's pickles.

## Open source

![](/static/img/blog/data_projects/session2.jpeg)

There was also a discussion on how companies see and get involved in
open source.

There were different points of views regarding hiring of open source
contributors. People closer to the recruitment side thought that it's
a clear competitive advantage to contribute to open source. While
people closer to open source development didn't see any impact of their
contributions in their professional careers.

There were also concerns on whether companies care about candidates
with good GitHub profiles, because they expect them to work longer
hours (since they are used to work for free), and be more motivated.

There were no experiences on companies supporting open source by hiring
contributors to work on the projects as part of their job.

The experiences on companies sponsoring events were very positive.
Most companies who host events, sponsor conferences seem to see
value when they have experience, and they keep recurring. Some
have seen the quality of applications to their companies increase
significantly, more than the quantity. And candidates usually
have a very positive attitude when interviewed by companies they
know because they sponsor events.

On the recruitment side, it was also side about the poor experience
of many companies, who have unreasonable tests to asses candidates.
There was agreement that tests should have a reasonable duration,
let the candidate learn things (about the company and the role
besides technical things), and useful feedback by senior technical
people should be given after it's reviewed.

## The future

Regarding the future of the data industry, everybody was optimistic
and thought that it will continue to grow, even with the difficulties
in delivering results. Companies seem to keep growing their awareness
of the value of the data they have.

Some areas that people expect to grow are fairness in machine learning
and interpretability.

For the future of our round tables, people found the session useful.
Besides sharing experiences, people found very useful to know that
other companies have many of the same problems, and that they didn't
take a wrong path, and are disconnected from the rest of the industry.

We are likely to organize sessions like this in the future. Several
people also shown interest on having them online, since they were
not based in London.

If you are managing data projects, and can be interested in future
session, feel free to get in touch. You have many ways to get in
touch with me at my [website](https://datapythonista.me).
