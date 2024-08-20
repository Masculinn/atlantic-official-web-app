import users from '@/lib/admin/users.json';

export async function getStaticPaths() {
    const paths = users.map((user) => ({
        params: { username: user.username.toString() },
    }));

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const user = users.find((u) => u.username.toString() === params.username);
  return { props: { user } };
}

export default function handler(req, res) {
    const { username } = req.query;
    const user = users.find((u) => u.username.toString() === username);
  
    if (!user) {
        res.status(404).json({ error: 'User not found' })
    }
  
    res.status(200).json(user);
}
