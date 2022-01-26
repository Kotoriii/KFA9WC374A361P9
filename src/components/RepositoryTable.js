import { Table } from "react-bootstrap";

const RepositoryTable = ({repositories}) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Repository Name</th>
          <th>Open Issues</th>
          <th>Stars</th>
        </tr>
      </thead>
      {repositories.length > 0 &&
        <tbody>
        {repositories.forEach((repo, index) => {
          <tr key={index}>
            <td>{index}</td>
            <td>{repo.name}</td>
            <td>{repo.open_issues_count}</td>
            <td>{repo.stargazers_count}</td>
          </tr>
        })}
        </tbody>
      }
    </Table>
  );
}

export default RepositoryTable;