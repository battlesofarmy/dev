import projectCoverImg from '@/src/assets/projects/projects-bg.webp'

export default function SingleProjectCover({title}) {
  return (
    <section>
      <div style={{
          background: `url(${projectCoverImg})no-repeat fixed center`,
          backgroundSize: "cover",
        }}>
        <div style={{ background: "" }} className="py-12">
          <div className="container text-white">
            <h2 className="text-4xl">{title}</h2>
            <p className="text- py-2">Your Perfect {title} Solution</p>
          </div>
        </div>
      </div>
    </section>
  );
}