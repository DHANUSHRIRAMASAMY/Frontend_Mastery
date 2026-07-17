import UserCard from "./UserCard";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
};

type UserListProps = {
  users: User[];
};

function UserList({ users }: UserListProps) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;