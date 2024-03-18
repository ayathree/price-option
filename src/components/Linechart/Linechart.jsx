
import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';
const Linechart = () => {

    const studentsData = [
        { id: 1, name: "Alice", mathMarks: 85 },
        { id: 2, name: "Bob", mathMarks: 78 },
        { id: 3, name: "Charlie", mathMarks: 92 },
        { id: 4, name: "David", mathMarks: 65 },
        { id: 5, name: "Emma", mathMarks: 88 },
        { id: 6, name: "Frank", mathMarks: 72 },
        { id: 7, name: "Grace", mathMarks: 90 },
        { id: 8, name: "Hannah", mathMarks: 83 },
        { id: 9, name: "Ian", mathMarks: 79 },
        { id: 10, name: "Jack", mathMarks: 95 }
      ];
      
    return (
        <div>
           <Lchart height={400} width={500} data={studentsData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis ></YAxis>
            <Line type="monotone" dataKey= 'mathMarks' stroke='red'></Line>

            </Lchart> 
            
        </div>
        
    );
};

export default Linechart;