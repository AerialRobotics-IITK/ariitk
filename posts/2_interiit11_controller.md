---
title: Techmeet Update I
slug: interiit-11-update
excerpt: Milestone update on Drona Aviation PS
date: 2023-01-28
author: ba-13
---

After working for two whole nights straight, we finally got our position controller working good enough.  
See, the problem itself would seem trivial. We had the digital controller coded up, we had the pluto in a working condition with a single provided battery.
Trouble comes up during tuning. You can need quite a few runs to get one degree of freedom working well, and while doing so others being coupled can get wrecked.  
Also the battery problem of equilibrium thrust being dependant on the battery's voltage was a headache as well.  
Adding to this, getting complete and consistent pose feedback from a single RGB monocular camera was pain as well, adjusting the camera's parameters according to lighting conditions, handling edge distortions, uneven lighting, AR tag visibility, all needed to be handled simultaneously.
Anyways, always focus on automating tasks, you'll save time. Automate logging, committing, recording hardware and code parameters, all are eventually helpful to analyse your performance.

<center>
<img src="/blogs/post2/group.jpg" alt="team" width="800vw"/>
</center>

Keep cycling between your available batteries. Gives you more flight time.  
Log your sensor data, and keep a ready to go visualizer.
