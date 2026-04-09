type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("User not found");
  }

  return res.json();
}

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: userId } = await params;
  const user = await getUser(userId);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{user.name}</h1>

      <div className="space-y-2 text-sm">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
      </div>
    </div>
  );
}
