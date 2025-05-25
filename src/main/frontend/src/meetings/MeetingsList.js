export default function MeetingsList({meetings,onDelete}) {

    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Akcje</th>
                <th>Dodaj uczestnika</th>
                <th>Usuń uczestnika</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td><button type="button"
                    onClick={()=>onDelete(meeting)}>Usuń</button> </td>
                    <td><button type="button"
                                onClick={()=>onDelete(meeting)}>Dodaj </button> </td>
                    <td><button type="button"
                                onClick={()=>onDelete(meeting)}>Usuń </button> </td>
                </tr>)
            }
            </tbody>
        </table>
    );
}
