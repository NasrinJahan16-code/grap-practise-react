import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';
const LineChart = () => {
     const students =[
        { "id": 1, "name": "Alice", "physics": 70, "chemistry": 65, "math": 68 },
        { "id": 2, "name": "Bob", "physics": 82, "chemistry": 78, "math": 75 },
        { "id": 3, "name": "Charlie", "physics": 58, "chemistry": 60, "math": 55 },
        { "id": 4, "name": "David", "physics": 91, "chemistry": 85, "math": 89 },
        { "id": 5, "name": "Eva", "physics": 73, "chemistry": 70, "math": 73 },
        { "id": 6, "name": "Frank", "physics": 95, "chemistry": 88, "math": 91 },
        { "id": 7, "name": "Grace", "physics": 68, "chemistry": 66, "math": 68 },
        { "id": 8, "name": "Hannah", "physics": 86, "chemistry": 84, "math": 84 },
        { "id": 9, "name": "Ian", "physics": 78, "chemistry": 74, "math": 76 },
        { "id": 10, "name": "Julia", "physics": 85, "chemistry": 80, "math": 82 }
      ]
    return (
        <div className='text-center'>
            <h4 className='text-4xl'>Marks GraphChart</h4>
            {/* <LChart width={500} height ={400} data ={student}>
                <Line datakey="marks"></Line>
            </LChart> */}
           
  <div className='items-center ml-10'>
  <LChart width={700} height={500} data={students}>
    <XAxis dataKey="name"></XAxis>
    <YAxis></YAxis>
    <Line type="monotone" dataKey="physics" stroke="#8884d8" />
    <Line type="monotone" dataKey="math" stroke="#8884d8" />
    <Line type="monotone" dataKey="chemistry" stroke="#8884d8" />
  </LChart>
  </div>

  

        </div>
    );
};

export default LineChart;