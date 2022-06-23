import { Group, Cylinder } from 'react-zdog'

export default function PilgrimHat(props) {
    return (
        <Group>
            <Cylinder translate={{ z: 50 }} diameter={50} length={70} stroke={false} color="black" />
            <Cylinder translate={{ z: 35 }} diameter={55} length={10} color="brown"></Cylinder>
            <Cylinder translate={{ x: 0, y: 0, z: 20 }} diameter={100} length={10} stroke={false} color="black" />
        </Group>
    )
}

