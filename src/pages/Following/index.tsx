import React from 'react';
import { Text } from 'react-native';
import Header from '../../components/Header';
import { Main,Wrapper,Container} from './styles';
import colors from '../../styles/colors';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';

const Following: React.FC = () => {
  return (
    <Wrapper>
       <Container>
          <Header/>
          <Main/>
       </Container>
    </Wrapper>
  );
};

export default Following;
