type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
};

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
    </div>
  );
}

export default UserCard;