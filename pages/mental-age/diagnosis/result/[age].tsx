import { getMentalAgeData } from "lib/mental-age"

export default function Result({mentalAgeData}) {
    return (
    <div>
    <p>Result</p>
    <p>{mentalAgeData.description}</p>
    </div>
        )
}

// export async function getStaticPaths() {
//     // Return a list of possible value for id
// }

export async function getServerSideProps({params}) {
    const mentalAgeData = await getMentalAgeData(params.age)
    return {
        props: {
          mentalAgeData
      }
    }
}