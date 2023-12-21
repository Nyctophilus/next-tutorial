import {
  Card,
  List,
  ListItem,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const res = await fetch("/api/users");
    const usersInfo = await res.json();
    setUsers(usersInfo.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (users)
    return (
      <section>
        {users.map(({ id, name }) => (
          <Card key={id} className="mb-4">
            <List>
              <ListItem>{name}</ListItem>
            </List>
          </Card>
        ))}
      </section>
    );
};
export default AllUsers;
