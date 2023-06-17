import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
} from '@chakra-ui/react';

export default function Daotasks({ title, subtitle, description, tags, image }) {
  const bg = 'white'; // Set the appropriate background color for the light mode

  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={bg}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'xl'}
          src={image}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {title}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {subtitle}
        </Text>
        <Text
          textAlign={'center'}
          color={bg === 'white' ? 'gray.700' : 'gray.400'}
          px={3}
        >
          {description}{' '}
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          Soul Dao in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              px={2}
              py={1}
              bg={bg === 'white' ? 'gray.50' : 'gray.800'}
              fontWeight={'400'}
            >
              {tag}
            </Badge>
          ))}
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
          >
            Submit
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
