import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API } from "../../data";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AppContext = createContext();

const addToCart = (product, setCart) => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const parsed = JSON.parse(cart);
    const existed = parsed.filter((p) => p.product.id == product.product.id);
    if (existed.length) {
      toast.error("This product existed already in the cart");
      return;
    }
    parsed.push(product);
    localStorage.setItem("cart", JSON.stringify(parsed));
    setCart([...parsed]);
  } else {
    const newCart = [product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart([...newCart]);
  }
  toast.success("Added succefully");
};

const deleteFromCart = (product, setCart) => {
  const cart = localStorage.getItem("cart");
  const parsed = JSON.parse(cart);
  const updatedCart = parsed.filter((p) => p.product.id !== product.id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setCart([...updatedCart]);
};

export const ContextProvider = (props) => {
  const { children } = props;
  const cartPre = JSON.parse(localStorage.getItem("cart")) || [];
  const [categeries, setCategories] = useState([]);
  const [newCategories, setNewCategories] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false);
  const [cart, setCart] = useState(cartPre);

  const cartAdd = (product) => addToCart(product, setCart);
  const cartDelete = (product) => deleteFromCart(product, setCart);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(`${API}/categories`);
      console.log("data is ", response.data);
      setCategories(response.data);
    };
    getCategories();
  }, []);
  useEffect(() => {
    setNewCategories(categeries);
    console.log("categories are: ", newCategories);
  }, [categeries]);

  const navigate = useNavigate();
  const InsertOrder = async (data) => {
    const shipping = JSON.parse(localStorage.getItem("shipping"));    
    if (!shipping) {
      toast.error(
        "No shipping cost found, please go to your cart page and select your city"
      );
      return;
    }

    setOrderLoading(true);
    const total = cart.reduce((a, p) => {
      return a + parseFloat(p.product.price) * parseFloat(p.order.quantity);
    }, 0);
    try {
      await axios.post(`${API}/orders`, {
        ...data,
        total,
        products_list: localStorage.getItem("cart"),
        discount_amount: "",
        promocode: "",
        shipping: JSON.stringify(shipping),
      });
      toast.success("We got your Order");
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/thankyou");
    } catch (error) {
      toast.error("Error happened");
    }
    setOrderLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        categeries,
        newCategories,
        cart,
        cartAdd,
        cartDelete,
        InsertOrder,
        orderLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
