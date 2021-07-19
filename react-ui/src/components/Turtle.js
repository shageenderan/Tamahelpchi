import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Illustration, Anchor, Ellipse, Shape, RoundedRect, Hemisphere, useRender } from './react-zdog'

/** --- Basic, re-usable shapes -------------------------- */
const TAU = Math.PI * 2
const HAPPY = TAU * 11 / 16
const SAD = -HAPPY

const Leg = props => (
  <Shape closed={false} stroke={20} color={body_color} path={props.path}></Shape>
)
const Eye = props => (
  <Shape translate={props.pos} stroke={10} color={face_color}></Shape>
)

const Mouth = props => (
  <Ellipse diameter={10} quarters={2} translate={{ x: 0, y: 24, z: -10 }} rotate={{ x: props.mood, z: TAU / 4 }} color={face_color} stroke={3} />
)

// class Mouth extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       quarters: 4
//     }
//   }

// munch = () => {
//   console.log(this.state.quarters)
//   this.state.quarters === 2 ? this.setState({quarters: 4}) :  this.setState({quarters: 2})
// }

// tick = setInterval(() => {
//   console.log("munch")
//   if (this.props.eating) this.munch()
// }, 2000)

//   componentWillUnmount() {
//     clearInterval(this.tick)
//   }

//   render() {
//     return (
//       <Ellipse diameter={10} quarters={this.state.quarters} translate={{ x: 0, y: 24, z: -10 }} rotate={{ x: this.props.mood, z: TAU / 4 }} color={face_color} stroke={3}></Ellipse>
//     )
//   }
// }

const body_color = '#A4C74B',
  face_color = '#4B264B',
  tummy_color = '#8CB746',
  shell_color = '#356F66',
  accent_color = '#397E71';

/** --- Assembly ----------------------------------------- */
export default function Turtle(props) {
  // Change motion every second
  let fwd = true;
  let walk = 0;

  // useRender allows us to hook into the render-loop
  const head_ref = useRef(undefined)
  const leg_r = useRef(undefined)
  const leg_l = useRef(undefined)

  useRender(() => {
    if (fwd) {
      head_ref.current.translate.z -= 0.04
      head_ref.current.translate.y -= 0.05
      head_ref.current.translate.x -= 0.003

      leg_l.current.rotate.z += 0.001
      leg_r.current.rotate.z += 0.001

    }
    else {
      head_ref.current.translate.z += 0.04
      head_ref.current.translate.y += 0.05
      head_ref.current.translate.x += 0.003

      leg_l.current.rotate.z -= 0.001
      leg_r.current.rotate.z -= 0.001

    }
    if (walk % 150 === 0) {
      fwd = !fwd
    }
    walk += 1;
  })
  return (
    // Shell
    <Hemisphere diameter={124} stroke={false} color={shell_color} rotate={{ x: TAU / 4 }} {...props}>
      <Ellipse translate={{ z: -1 }} diameter={126} stroke={12} color={accent_color} />
      <Ellipse translate={{ z: -8 }} diameter={90} stroke={8} color={tummy_color} fill />

      {/* head */}
      <Anchor ref={head_ref} >
        <Shape translate={{ y: 90, z: 15 }} stroke={55} color={body_color}>
          <Eye pos={{ x: -16, y: 10, z: 3 }} />
          <Eye pos={{ x: 16, y: 10, z: 3 }} />
          <Mouth mood={HAPPY} />

        </Shape>
      </Anchor>


      {/* Neck */}
      <Shape path={[{ x: 0, y: 40, z: -14 }, // start at 1st point (in shell)
      {
        arc: [
          { x: 0, y: 60, z: -30 }, // corner
          { x: 0, y: 80, z: -6 }, // end point (in head)
        ]
      }]}
        closed={false} stroke={24} color={body_color}></Shape>

      {/* Legs */}
      <Anchor ref={leg_l}>
        <Leg path={[
          { x: -30, y: 28, z: -16 }, // start at 1st point (in shell)
          {
            arc: [
              { x: -60, y: 34, z: -24 }, // corner
              { x: -60, y: 36, z: -36 }, // end point (in head)
            ]
          },
        ]} />

        <Leg path={[
          { x: -30, y: -28, z: -16 }, // start at 1st point (in shell)
          {
            arc: [
              { x: -60, y: -34, z: -24 }, // corner
              { x: -60, y: -36, z: -36 }, // end point (in head)
            ]
          },
        ]} />

      </Anchor>

      <Anchor ref={leg_r}>
        <Leg path={[
          { x: 23, y: 28, z: -16 }, // start at 1st point (in shell)
          {
            arc: [
              { x: 60, y: 34, z: -24 }, // corner
              { x: 60, y: 36, z: -36 }, // end point (in head)
            ]
          },
        ]} />

        <Leg path={[
          { x: 30, y: -28, z: -16 }, // start at 1st point (in shell)
          {
            arc: [
              { x: 60, y: -34, z: -24 }, // corner
              { x: 60, y: -36, z: -36 }, // end point (in head)
            ]
          },
        ]} />


      </Anchor>
      {/* Tail */}
      <Shape path={[
        { x: 0, y: -50, z: -14 }, // start (in shell)
        {
          arc: [
            { x: 0, y: -65, z: -16 }, // corner
            { x: 0, y: -76, z: -8 }, // end point (tail)
          ]
        }
      ]} closed={false} stroke={10} color={body_color}></Shape>
    </Hemisphere>
  )
}
