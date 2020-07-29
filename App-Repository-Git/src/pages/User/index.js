import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard, ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    UserGit,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText,
} from './styles';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: '',
            users: [],
            loading: false,
        };
    }

    handleAddUser = async () => {
        const { users, newUser } = this.state;
        this.setState({ loading: true });

        const response = await api.get(`/users/${newUser}`);

        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
        };

        this.setState({
            users: [...users, data],
            newUser: '',
            loading: false,
        });

        Keyboard.dismiss();
    };

    render() {
        const { users, newUser, loading } = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        autoCorret={false} // teclado não dar sugestão de correção
                        autoCapitalize="none" // deixar as letras tudo em minusculo
                        placeholder="Adicionar usuário" // texto a ser mostrado
                        value={newUser} // salvando no atributo
                        onChangeText={(text) =>
                            this.setState({ newUser: text })
                        } // armazenando o texto do input na variavel "newUser" do state.newUser
                        returnKeyType="send" // config teclado app para enviar msgs
                        onSubmitEditing={this.handleAddUser} // chamando o metodo de add user
                    />
                    <SubmitButton
                        loading={loading}
                        onPress={this.handleAddUser} // chamando o metodo de ação para add user
                    >
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Icon name="add" size={20} color="#fff" />
                        )}
                    </SubmitButton>
                </Form>

                <List
                    data={users}
                    keyExtractor={(user) => user.login}
                    renderItem={({ item }) => (
                        <UserGit>
                            <Avatar source={{ uri: item.avatar }} />
                            <Name>{item.name}</Name>
                            <Bio>{item.bio}</Bio>
                            <ProfileButton onPress={() => {}}>
                                <ProfileButtonText>
                                    Ver Perfil
                                </ProfileButtonText>
                            </ProfileButton>
                        </UserGit>
                    )}
                />
            </Container>
        );
    }
}

export default User;
