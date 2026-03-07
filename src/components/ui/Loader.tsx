import StyleCSS from './loader.module.css'


export default function Loader() {
    return (
        <div className={StyleCSS.pure_grid_loading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
