import { OrbitControls, TransformControls, PivotControls, Html, Text, Float, MeshReflectorMaterial, Sky } from "@react-three/drei"
import { useRef } from "react"

export default function Experience()
{
    const cubeRef = useRef()
    const sphereRef = useRef()
    const textRef = useRef()

    return <>        

        <OrbitControls makeDefault/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Sky distance={450000} sunPosition={[0, 1, 8]} inclination={0} azimuth={0.75} />


        <Float>

        <PivotControls anchor={ [0, 0, 0] } depthTest={ false } lineWidth={ 2 } axisColors={ ["#9381ff", "#ff4d6d", "#7ae582"] }>
        <mesh ref= { sphereRef } position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html 
            position={ [1, 1, 0] }
            wrapperClass="label"
            center
            distanceFactor={ 6 }
            occlude={ [ sphereRef, cubeRef, textRef ] }
            >Sphere shape 👌</Html>
        </mesh>
        </PivotControls>


        <mesh ref={ cubeRef } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
            <Html 
            position={ [0.9, 0.5, 0] }
            wrapperClass="label"
            center
            distanceFactor={ 6 }
            occlude={ [ sphereRef, cubeRef, textRef ] }
            >Cube shape 🟪</Html>
        </mesh>

        </Float>


        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial 
            resolution={ 512 }
            blur= { [1000, 1000] }
            mirror={0.6}
            color="greenyellow"
            />
        </mesh>


        {/* <TransformControls mode="translate" object={ cubeRef } /> */}
        <Float>


        <Text 
        position={ [0, 2.5, -3] }
        font="./bangers-v20-latin-regular.woff"
        fontSize={1.4}
        color="salmon"
        maxWidth={ 5 }
        textAlign="center"
        ref={ textRef }
        > R3F Text Example</Text>
 
        </Float>

    </>
}