## UV Map

A simple scene that shows a spritesheet animation of a robot talking.

![](screenshot/screenshot.gif)

This scene shows you:

- How to map a portion of a texture onto a plane
- How to change the mapped portion of a texture frame by frame to produce a 2D frame by frame animation

A PlaneShape uses a spritesheet as texture, selecting only a region of the image. The selected region is changed on every frame, to simulate movement.

This is the image used as a spritesheet:

![](images/robotTalking.png)

> Note: Event though this is not how we animated the robots in Genesis Plaza in the end, it's still a valuable example for other spritesheet implementations.



## Try it out

**Install the CLI**

Download and install the Decentraland CLI by running the following command:

```bash
npm i -g decentraland
```

**Previewing the scene**

Download this example and navigate to its directory, then run:

```
$:  dcl start
```

Any dependencies are installed and then the CLI opens the scene in a new browser tab.
Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

If something doesn’t work, please [file an issue](https://github.com/decentraland-scenes/Awesome-Repository/issues/new).

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
