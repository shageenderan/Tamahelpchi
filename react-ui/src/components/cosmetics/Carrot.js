import { Group, Cone } from 'react-zdog'
const TAU = Math.PI * 2
export default function Carrot(props) {
    return (
        <Group translate={{ z: 10 }}>
            <Cone color={"orange"} diameter={10} length={20} stroke={false} rotate={{ x: -TAU / 8, y: TAU / 2, z: 0 }} >
                <Cone color={"green"} translate={{ z: 0 }} diameter={5} length={10} stroke={false} rotate={{ y: TAU / 2 }} />
                <Cone color={"green"} translate={{ x: 3, z: 0 }} diameter={5} length={10} stroke={false} rotate={{ y: TAU / 2 }} />
                <Cone color={"green"} translate={{ x: -3, z: 0 }} diameter={5} length={10} stroke={false} rotate={{ y: TAU / 2 }} />
            </Cone>
        </Group>
    )
}

