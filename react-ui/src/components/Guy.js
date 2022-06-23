import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Illustration, Anchor, Ellipse, Shape, RoundedRect, Hemisphere, useRender, Group, Cylinder } from 'react-zdog'
import { a, useSpring } from '@react-spring/zdog'

import PilgrimHat from './cosmetics/PilgrimHat'

const body_color = '#A4C74B',
face_color = '#4B264B',
tummy_color = '#8CB746',
shell_color = '#356F66',
accent_color = '#397E71';

/** --- Basic, re-usable shapes -------------------------- */
const TAU = Math.PI * 2
const HAPPY = TAU * 11 / 16
const SAD = -HAPPY

const Eye = (props) => <Ellipse diameter={1.5} quarters={2} translate={{ x: -2.2, y: 0, z: 4.5 }} rotate={{ z: -TAU / 4 }} color="#444B6E" stroke={0.5} {...props} />
const Leg = (props) => (
  <a.Shape path={[{ y: 0 }, { y: 6 }]} translate={{ x: -3 }} color="#747B9E" stroke={4} {...props}>
    <Shape path={[{ y: 0 }, { y: 6 }]} translate={{ y: 6 }} rotate={{ x: -TAU / 8 }} color="#747B9E" stroke={4} />
    <RoundedRect width={2} height={4} cornerRadius={1} translate={{ y: 12, z: -3.5 }} rotate={{ x: TAU / 6 }} color="#444B6E" fill stroke={4} />
  </a.Shape>
)
const Arm = (props) => (
  <a.Shape path={[{ y: 0 }, { y: 4 }]} translate={{ x: -5, y: -2 }} color="#F0F2EF" stroke={4} {...props}>
    <Shape path={[{ y: 0 }, { y: 4 }]} translate={{ y: 6 }} rotate={{ x: TAU / 8 }} color="#EA0" stroke={4} />
    <Shape translate={{ z: 4, y: 9, x: 0 }} stroke={5.4} color="#EA0" />
  </a.Shape>
)

/** --- Assembly ----------------------------------------- */
export default function Guy(props) {
  // Change motion every second
  const [up, setUp] = useState(true)
  useEffect(() => void setInterval(() => setUp((previous) => !previous), 450), [])
  // Turn static values into animated values
  const { rotation, color, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#EA0' : 'tomato', rotation: up ? 0 : Math.PI })
  // useRender allows us to hook into the render-loop
  const ref = useRef()
  let t = 0

  return (
    <Hemisphere ref={ref} diameter={124} stroke={false} color={shell_color} rotate={{ x: TAU / 4 }} {...props}>
      <Ellipse translate={{ z: -6 }} diameter={126} stroke={12} color={accent_color} />
      <Ellipse translate={{ z: -8 }} diameter={90} stroke={8} color={tummy_color} fill />

      {/* head */}
      <a.Anchor>
        <Shape translate={{ y: 90, z: 15 }} stroke={55} color={body_color} />
        <Eye pos={{ x: -16, y: 100, z: 18 }} />
        <Eye pos={{ x: 16, y: 100, z: 18 }} />
        {/* <Mouth mood={HAPPY} /> */}
        {/* Mouth */}
        <a.Ellipse diameter={10} scale={size} quarters={2} translate={{ x: 0, y: 110, z: 5 }} rotate={{ x: HAPPY, z: TAU / 4 }} color={face_color} stroke={3} />

        {/* Head Cosmetics*/}
        <Anchor translate={{ y: 90, z: 20 }}>
          <PilgrimHat></PilgrimHat>
        </Anchor>

      </a.Anchor>

        <Shape path={[{ x: -1.5 }, { x: 1.5 }]} translate={{ y: -6 }} stroke={9} color="#E1E5EE">
          <a.Shape stroke={11} translate={{ y: -9.5 }} color={color}>
            <Shape translate={{ x: 0, y: -2, z: -4 }} stroke={8} color="#747B9E" />
            <Ellipse diameter={6} rotate={{ x: -TAU / 10 }} translate={{ y: -4, z: -1 }} stroke={4} color="#444B6E" fill />
            <Eye />
            <Eye translate={{ x: 2.2, z: 4.5 }} />
            <a.Ellipse diameter={1.3} scale={size} translate={{ y: 2, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="#444B6E" stroke={0.5} fill />
            <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
            <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
            <Ellipse diameter={0.5} translate={{ x: 4.5, y: -4.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="lightblue" stroke={0.5} fill />
          </a.Shape>
          <Arm rotate={rotation.interpolate((r) => ({ x: -TAU / 4 + r }))} />
          <Arm translate={{ x: 5, y: -2 }} rotate={rotation.interpolate((r) => ({ x: TAU / 4 - r }))} />
        </Shape>
      <Leg rotate={rotation.interpolate((r) => ({ x: TAU / 5 - r / 1.2 }))} />
      <Leg translate={{ x: 3 }} rotate={rotation.interpolate((r) => ({ x: -TAU / 5 + r / 1.2 }))} />
    </Hemisphere>
  )
}
