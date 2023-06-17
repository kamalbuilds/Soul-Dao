import { Grid } from '@chakra-ui/react';
import Daotasks from '../components/daotasks';

const DaotasksPage = () => {
  const tasks = [
    {
      title: 'Task #1',
      subtitle: 'Twitter thread',
      description: 'Create a twitter thread about the Soul Dao',
      tags: ['#art', '#photography'],
      image : 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
      title: 'Task #2',
      subtitle: 'Instagram post',
      description: 'Create an instagram post about the Soul Dao',
      tags: ['#design', '#creativity'],
      image : 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      title: 'Task #3',
      subtitle: 'Blog article',
      description: '',
      tags: ['#writing', '#blogging'],
      image : 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
  ];

  return (
    <>
    <h1 className='text-center'>Dao Tasks</h1>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {tasks.map((task, index) => (
            <Daotasks
            key={index}
            title={task.title}
            subtitle={task.subtitle}
            description={task.description}
            tags={task.tags}
            image={task.image}
            />
        ))}
        </Grid>
    </>
  );
};

export default DaotasksPage;
