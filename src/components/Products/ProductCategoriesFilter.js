import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem, Badge, Text} from 'native-base';
const categoriesAll = require('../../../assets/categories');

const ProductCategoriesFilter = ({products, setProductsCategory}) => {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        setCategories(categoriesAll);

        return () => {
            setCategories([]);
            setActive(0);
        };
    }, []);

    const changeCtg = async ctg => {
        if (ctg === 'all') {
            setProductsCategory(products);
        } else {
            const productsFiltered = await products.filter(
                i => i.category.$oid === ctg,
            );
            setProductsCategory(productsFiltered);
        }
    };

    return (
        <ScrollView
            bounces={true}
            horizontal={true}
            style={{backgroundColor: '#f2f2f2'}}>
            <ListItem style={styles.listContainer}>
                {categories.map((category, i) => (
                    <TouchableOpacity
                        key={i}
                        onPress={() => {
                            changeCtg(category._id.$oid);
                            setActive(categories.indexOf(category));
                        }}>
                        <Badge
                            style={[
                                styles.center,
                                {margin: 5},
                                active == categories.indexOf(category)
                                    ? styles.active
                                    : styles.inactive,
                            ]}>
                            <Text style={{color: '#fff'}}>{category.name}</Text>
                        </Badge>
                    </TouchableOpacity>
                ))}
            </ListItem>
        </ScrollView>
    );
};

export default ProductCategoriesFilter;

const styles = StyleSheet.create({
    listContainer: {
        margin: 0,
        padding: 0,
        borderRadius: 0,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#03bafc',
    },
    inactive: {
        backgroundColor: '#a0e1eb',
    },
});
