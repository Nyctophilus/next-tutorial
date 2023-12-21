"use client";

import {
  Button,
  Card,
  Input,
  List,
  ListItem,
} from "@material-tailwind/react";
import { useState } from "react";

const SpecificUser = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");

  const getUser = async () => {
    const res = await fetch(`/api/users/${userId}`);

    if (res.status == 200) {
      const data = await res.json();
      setUser(data.user);
    } else {
      console.log(data.error);
      setUser(null);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-72">
          <Input
            label="Enter User ID"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <Button onClick={getUser}>Fetch User</Button>
      </div>
      {user ? (
        <>
          <Card className="w-96 mt-5 bg-gradient-to-r from-purple-500 to-pink-100">
            <List>
              <ListItem className="text-white">
                ID: {user.id}
              </ListItem>
              <ListItem className="text-white">
                Name: {user.name}
              </ListItem>
              <ListItem className="text-white">
                Email: {user.email}
              </ListItem>
              <ListItem className="text-white">
                Password: {user.password}
              </ListItem>
              {user.age && (
                <ListItem className="text-white">
                  Age: {user.age}
                </ListItem>
              )}
            </List>
          </Card>
        </>
      ) : (
        <p className="mt-2 text-amber-600">
          Search for specific user
        </p>
      )}
    </>
  );
};
export default SpecificUser;
