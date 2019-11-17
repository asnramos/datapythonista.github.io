Title: New pandas workflow
Slug: new-pandas-workflow
Tags: pandas

Some exciting news. After some years of organizing [sprints](https://python-sprints.github.io/),
and maintaining open source, I've been thinking on a more efficient workflow for projects with
high volume of activity, like [pandas](https://pandas.pydata.org/).

An exaggerated example would be that I want to create 1,600 issues in pandas. One for each
docstring of the project, with the flaws that we are able to automatically detect. As a
side know, most of our validations to detect incorrect things in docstrings based on the
[numpydoc standard](https://numpydoc.readthedocs.io/en/latest/format.html) are now available
in `numpydoc` (in master). You can check the
[documentation](https://numpydoc.readthedocs.io/en/latest/validation.html) to
see how to use it. And the [source code](https://github.com/numpy/numpydoc/blob/master/numpydoc/validate.py#L35)
for the list of errors we validate.

![](/static/img/blog/numpydoc_validation.png)

Back to the example, [GitHub API](https://developer.github.com/v3/) and our validations
scripts would make it very easy to create those 1,600 GitHub issues. We could create a
label `Docstring errors` to identify them, and ask the community for help to fix
those. The community responded extremely well in the past when we ask them for help.
500 people joined our [worldwide documentation sprint](https://numfocus.org/blog/worldwide-pandas-sprint).
So, things seem feasible so far.

There are just two main problems to make all this work:

First, there is a small number of maintainers who would have to review, give feedback, and
merge the contributions. 1,600 pull requests is surely too much for a small group
of volunteers. We are surely in a much better position now, than when 500 people
contributed in a single day (it took months to deal with all the pull requests of the sprints).
We are around 12 active maintainers, compared to 4 at that time.
And we've been improving on making our workflow more efficient, with the
CI providing every time better feedback. More accurate, and presented in a better
way, so first time contributors can detect problems in their work without much
intervention from maintainers. [GitHub Actions](https://github.com/features/actions)
will be key in making our workflow more efficient for code reviews (things like
contributors receiving automated emails when the CI detects something that needs to
be fixed in their work).

Second, how could people know which of the 1,600 issues are available, and which
are already in the works by someone else? For small projects, GitHub has an option
`Assignees` where members of a scrum team can assign to themselves what they are
working on. But this is not possible for a project the size of pandas, since only members
of the organization are able to self-assign issues. And even if we wanted to add
every possible contributor to the pandas GitHub organization, that would be a huge
amount of work for maintainers.

The best solution should come from GitHub. Adding an option so project admins can
decide whether they want to allow any GitHub user to self-assign issues in their
projects. I've been discussing this with people at GitHub, and it is something it
may be added. But not immediately.

The good news is that with the help of [GitHub Actions](https://github.com/features/actions)
is now possible to achieve the same, in a slightly trickier way. We just added
to pandas an [action to self-assign issues](https://github.com/pandas-dev/pandas/pull/29648).
How it works is by just writing a comment with the keyword `take` to an issue.
And few seconds later, the action will assign the issue to the commenter. This
is possible because few months ago GitHub added a feature to let
[assign issues to issue commenters](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).
It is not possible even for maintainers to assign an issue to an arbitrary user.

![](/static/img/blog/github_actions_assign.png)

With this simple but powerful change, now a much more efficient workflow should
be possible. The workflow could consist in:

- People interested in contributing to pandas start by [setting up the environment](https://python-sprints.github.io/pandas/guide/pandas_setup.html)
  and learn [how to make an open source contribution](https://docs.google.com/presentation/d/1rOSYXZPyMe9KXnbVK_xbJzw_-ijxd6bIxndmvPU6L2o/edit?usp=sharing)
- Then they check the list of [unassigned good first issues](https://github.com/pandas-dev/pandas/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22+no%3Aassignee)
- Once they find one that they want to work on, they write a comment with the keyword `take` on it
- The issue will disappear from the list of unassigned issues,
  other people won't waste time checking whether it's available or not
- If the person can't finally move forward (got busy, they are not interested anymore...)
  they can simply unassign themselves from the issue, and it will be in the list again

This new workflow scales to the 1,600 issues or more. Before, potential contributors had
a list with all issues, assigned and not assigned. They had to check each individually for comments
claiming the issue, deal with ambiguity (do messages like "can I work on this?" mean you're working
on the issue?), and possibly have some discussion, before they could know if someone else is working in the issue.

One obvious problem is if people self-assigning an issue, discontinuing work on it, but not
unassigning the issue. We will see how this works, but even in the worst case, unassigned
issues will still be easy to find if they exist. For the assigned ones, people can check them,
and know immediately who to ask to know if work is still going on, or progress was made.
And to ask if the original assignee is happy to hand over the issue to the new interested contributor.

Implementing a bot that unassignes issues automatically after N days of inactivity could
also be an option.
