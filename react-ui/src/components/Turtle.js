import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Illustration, Anchor, Ellipse, Shape, RoundedRect, Hemisphere, useRender, Group, Cylinder, Cone } from 'react-zdog'
import { a, useSpring } from '@react-spring/zdog'
import useSound from 'use-sound';
import Chewing from '../assets/sounds/chewing.mp3'

import PilgrimHat from './cosmetics/PilgrimHat'
import Carrot from './cosmetics/Carrot'

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
  <a.Ellipse diameter={10} quarters={2} translate={{ x: 0, y: 110, z: 5 }} rotate={{ x: props.mood, z: TAU / 4 }} color={face_color} stroke={3} />
)

const body_color = '#A4C74B',
  face_color = '#4B264B',
  tummy_color = '#8CB746',
  shell_color = '#356F66',
  accent_color = '#397E71';

/** --- Assembly ----------------------------------------- */
export default function Turtle(props) {
  const [up, setUp] = useState(true)
  const [food_pos, set_food_pos] = useState({ x: 0, y: 130, z: 3 })

  const [play, { stop }] = useSound(
    Chewing,
    { volume: 1 }
  );

  useEffect(() => void setInterval(() => setUp(previous => !previous), 200), [])

  useEffect(() => { if(props.eating) {console.log("playing sound"); play()} else {stop()} }, [props.eating])

  useEffect(() => {
    const interval = setInterval(() => { props.eating ? set_food_pos(previous => { return { ...previous, y: previous.y - 1 } }) : set_food_pos({ x: 0, y: 130, z: 3 }) }, 200)
    return () => clearInterval(interval)
  },
    [props.eating]
  )

  // useEffect(() => void setInterval(() => {console.log("eating", props.eating); props.eating ? set_food_pos(previous => {return {...previous, y: previous.y-1}}) : set_food_pos({  x: 0, y: 130, z: 0 })}, 200), [props.eating])

  const { openMouth } = useSpring({ openMouth: up ? true : false })

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
      <Ellipse translate={{ z: -6 }} diameter={126} stroke={12} color={accent_color} />
      <Ellipse translate={{ z: -8 }} diameter={90} stroke={8} color={tummy_color} fill />

      {/* head */}

      <a.Anchor ref={head_ref}>
        <Shape translate={{ y: 90, z: 15 }} stroke={55} color={body_color} />
        <Eye pos={{ x: -16, y: 100, z: 18 }} />
        <Eye pos={{ x: 16, y: 100, z: 18 }} />
        {/* <Mouth mood={HAPPY} /> */}
        {/* Mouth */}
        {props.eating ?
          <Group>
            <a.Group translate={food_pos} visible={food_pos.y >= 120}>
              {/* Food */}
              <Carrot></Carrot>
            </a.Group>
            <a.Ellipse diameter={13} quarters={2} translate={{ x: 0, y: 110, z: 5 }} fill={openMouth} rotate={{ x: HAPPY, z: TAU / 4 }} color={face_color} stroke={3} />
            {/* <a.Shape diameter={10} translate={food_pos} visible={food_pos.y >= 110} color={"red"} stroke={10} /> */}
            
          </Group>
          :
          <a.Ellipse diameter={13} quarters={2} translate={{ x: 0, y: 110, z: 5 }} rotate={{ x: HAPPY, z: TAU / 4 }} color={face_color} stroke={3} />
        }



        {/* Head Cosmetics*/}
        <Anchor translate={{ y: 90, z: 20 }}>
          <PilgrimHat></PilgrimHat>
        </Anchor>

      </a.Anchor>

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
      <Group>
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
      </Group>

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
