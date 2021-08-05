import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper';
import { HeaderTitle } from '../components/HeaderTitle';
import usuariosApi from '../helper/usuariosApi';
import { UserResponse, Usuario } from '../interfaces/interfaces';
import { styles } from '../theme/style';

export const UsuariosScreen = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    useEffect(() => {
        getUsuarios();
        console.log(usuarios);
    }, [])

    const getUsuarios = async () => {
        const resp = await usuariosApi.get<UserResponse>('/users');
        setUsuarios(resp.data.usuario);
    }

    return (
        <>
            <HeaderTitle title="Usuarios" />
            <ScrollView horizontal  >
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title style={{ ...styles.contenido, ...styles.title }}>Nombre</DataTable.Title>
                        <DataTable.Title style={{ ...styles.contenido, ...styles.title }} >Email</DataTable.Title>
                        <DataTable.Title style={{ ...styles.contenido, ...styles.title }}>Ciudad</DataTable.Title>
                        <DataTable.Title style={{ ...styles.contenido, ...styles.title }}>Compañia</DataTable.Title>
                    </DataTable.Header>
                    {
                        usuarios.map((usuario, key) => (
                            <DataTable.Row key={key}>
                                <DataTable.Cell style={styles.contenido} >{usuario.name}</DataTable.Cell>
                                <DataTable.Cell style={styles.contenido} >{usuario.email}</DataTable.Cell>
                                <DataTable.Cell style={styles.contenido} >{usuario.address.city}</DataTable.Cell>
                                <DataTable.Cell style={styles.contenido} >{usuario.company.name}</DataTable.Cell>
                            </DataTable.Row>
                        ))
                    }
                    <DataTable.Row>
                        <DataTable.Title style={{ ...styles.contenido, ...styles.title }}>Nombre</DataTable.Title>
                        <DataTable.Title style={{ ...styles.contenido, ...styles.title }} >Email</DataTable.Title>
                        <DataTable.Title style={{ ...styles.contenido, ...styles.title }}>Ciudad</DataTable.Title>
                        <DataTable.Title style={{ ...styles.contenido, ...styles.title }}>Compañia</DataTable.Title>
                    </DataTable.Row>

                </DataTable>
            </ScrollView >
        </>
    )
}
