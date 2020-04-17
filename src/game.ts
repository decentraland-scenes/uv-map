// 3d model of the robot

import { UpdateSprite } from './modules/spriteFrames'

// 3d model of robot
let robot = new Entity()
robot.addComponent(new GLTFShape('models/robotTalking.glb'))
robot.addComponent(
  new Transform({
    position: new Vector3(8, 1.5, 8),
  })
)
engine.addEntity(robot)

// material for face
const faceMaterial = new BasicMaterial()
const texture = new Texture('images/robotTalking.png', { samplingMode: 0 })
faceMaterial.texture = texture

// create plane to show the frames on
const robotFace = new Entity()
const transform = new Transform()
transform.position.set(8, 1.5, 8.005)
transform.scale.setAll(0.4)

let plane = new PlaneShape()
robotFace.addComponentOrReplace(plane)
robotFace.addComponentOrReplace(faceMaterial)
robotFace.addComponentOrReplace(transform)
engine.addEntity(robotFace)

// start system for switching frames
// parameters:  rows, columns, interval between frames, PlaneShape to set them onto
engine.addSystem(new UpdateSprite(8, 8, 0.2, plane))

// MANUALLY SET FIRST FRAME  (optional)

// X,Y coordinates for each of the four corners of the first frame
// the coordinates are relative, where 1 = the full dimension of the texture
// there are 8 sets of X,Y coordinates, for the four corners on the front and the back of the plane

plane.uvs = [
  0,
  0.875,
  0.125,
  0.875,
  0.125,
  1,
  0,
  1,
  0,
  0.875,
  0.125,
  0.875,
  0.125,
  1,
  0,
  1,
]
