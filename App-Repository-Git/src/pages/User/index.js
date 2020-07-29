import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard } from 'react-native';
import api from '../../services/api';

import { Container, Form, Input, SubmitButton } from './styles';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: '',
            users: [],
        };
    }

    handleAddUser = async () => {
        const { users, newUser } = this.state;
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
        });

        Keyboard.dismiss();
    };

    render() {
        const { newUser } = this.state;

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
                        onPress={this.handleAddUser} // chamando o metodo de ação para add user
                    >
                        <Icon name="add" size={20} color="#fff" />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}

export default User;
