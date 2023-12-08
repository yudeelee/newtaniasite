import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

const page = async () => {
  const data = await getServerSession(options);

  if (!data?.user) {
    redirect('/admin/login');
  }

  return <div>Admin</div>;
};

export default page;
