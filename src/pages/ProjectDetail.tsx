import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { allProjects } from '@/components/ProjectsSection';
import ParticleBackground from '@/components/ParticleBackground';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = allProjects.find((item) => item.slug === slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-hero noise-overlay px-6 py-20 text-center text-foreground">
        <div className="mx-auto max-w-xl rounded-2xl border border-primary/20 bg-card/60 p-8 backdrop-blur-sm">
          <h1 className="font-display text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-6">This project does not exist or may have been removed.</p>
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const images = project.images ?? [project.image ?? ''];

  const openImageViewer = (index: number) => setSelectedImageIndex(index);
  const closeImageViewer = () => setSelectedImageIndex(null);
  const showPreviousImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + images.length - 1) % images.length);
  };
  const showNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  return (
    <div className="relative min-h-screen bg-gradient-hero noise-overlay">
      <ParticleBackground />
      <div className="container relative z-10 mx-auto max-w-5xl px-6 py-10 md:py-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to main page
        </Link>

        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-card/50 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <button
              type="button"
              onClick={() => openImageViewer(0)}
              className="overflow-hidden rounded-2xl border border-primary/15 bg-primary/5 text-left transition-transform duration-200 hover:scale-[1.01]"
              aria-label={`Open ${project.title} image 1`}
            >
              <img
                src={images[0]}
                alt={`${project.title} image 1`}
                className="h-full w-full object-cover"
              />
            </button>

            <div>
              <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Project detail
              </span>
              <h1 className="font-display text-3xl font-bold md:text-5xl text-foreground">{project.title}</h1>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-transparent px-4 py-2.5 font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live
                </a>
              </div>
            </div>
          </div>

          {images.length > 1 && (
            <div className="mt-10">
              <h2 className="mb-5 font-display text-2xl font-bold text-foreground">Images</h2>
              <div className="grid gap-5 md:grid-cols-2">
                {images.map((image, index) => (
                  <button
                    key={`${project.slug}-image-${index}`}
                    type="button"
                    onClick={() => openImageViewer(index)}
                    className="overflow-hidden rounded-2xl border border-primary/15 bg-primary/5 text-left transition-transform duration-200 hover:scale-[1.01]"
                    aria-label={`Open ${project.title} image ${index + 1}`}
                  >
                    <img src={image} alt={`${project.title} image ${index + 1}`} className="h-64 w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl rounded-3xl border border-primary/20 bg-slate-950/90 p-4 shadow-2xl md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={closeImageViewer}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                aria-label="Back to gallery"
              >
                <X className="h-4 w-4" />
                Back
              </button>

              <span className="text-sm text-muted-foreground">
                {selectedImageIndex + 1} / {images.length}
              </span>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900">
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <img
                src={images[selectedImageIndex]}
                alt={`${project.title} image ${selectedImageIndex + 1}`}
                className="max-h-[75vh] w-full object-contain"
              />

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
