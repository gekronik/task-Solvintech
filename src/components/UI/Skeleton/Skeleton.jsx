import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={368}
        height={240}
        viewBox="0 0 368 240"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="513" cy="26" r="30" />
        <rect x="534" y="0" rx="0" ry="0" width="140" height="0" />
        <rect x="529" y="18" rx="2" ry="2" width="140" height="10" />
        <rect x="5" y="22" rx="0" ry="0" width="400" height="400" />
        <rect x="325" y="253" rx="0" ry="0" width="1" height="0" />
    </ContentLoader>
)

export default Skeleton