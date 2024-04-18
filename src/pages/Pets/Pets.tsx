import { useEffect, useState } from "react";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";
// import { getPets } from "../../services/pets/getPets";
// import { Skeleton } from "../../components/common/Skeleton";

export function Pets(){
    // const [pets, setPets] = useState([])
    useEffect(() => {
        
    }, [])
    return (
    <Grid>
        <div className={styles.container}>
            <Header />
            <main className={styles.list}>
                <Card href="/pets/1" text="nina" thumb=""/>
                <Card href="/pets/2" text="bob" thumb=""/>
                <Card href="/pets/3" text="jão" thumb=""/>
            </main>
        </div>
    </Grid>
    )
}