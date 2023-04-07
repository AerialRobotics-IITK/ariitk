---
title: Techmeet Update II
slug: interiit-11-update-2
excerpt: Previous approach update on Drona Aviation PS
date: 2023-02-01
author: ba-13
---

I'll describe the PS a bit.
We are given a quadcopter with an onboard FC with inbuilt IMU (measured), Baro (measured), Vario (calculated). The Flight Controller is capable of RPYT control of the drone, and can be communicated over WiFi through Multi-Wii protocol packets, by an ESP module on-board.
Our task was to create a wrapper for making such protocol packets on high-level, then using that and a nadir webcam for rendering a position control.
Webcam was not provided, depended on the team. We chose `oCam-1CGN-U`, because we already had that (bestowed upon us by our previous team).
We had access to `D435i Realsense` as well, but due to it's specs of lower field of view, didn't give it a shot.
Now comes the position control.
Visualise a normal control system, with plant at front, from which sensor(s) giving feedback to a control unit along with a reference, which is fed-forward to the plant.
Our sensor was the oCam, on which we had setup before as the following: using [ocam_ros](https://github.com/AerialRobotics-IITK/ocam), it was convenient to stream the frames at @35fps on a topic in ROS, yes initially we were using ROS. This was subscribed by a processing node, which throws out `pose` at another topic, again at @35fps (latched). Finally this pose topic was subscribed to by the controller unit, we implemented (a personally derieved by one of our mates) an MPC controller, which used the above wrapper underhood to communicate with the drone yet again at @35fps.

All well and good, it was working okay. 35Hz of control signals, good no? No, and we're still using ROS.
It gets better. Will explain on the next post.
