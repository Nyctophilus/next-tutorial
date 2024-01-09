import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div class={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loading;
