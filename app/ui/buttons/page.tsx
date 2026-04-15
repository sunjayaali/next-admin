import { HeartIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="card shadow">
        <div className="card-body">
          <div className="card-title">Buttons</div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center">
            <button className="btn btn-xs">Xsmall</button>
            <button className="btn btn-sm">Small</button>
            <button className="btn">Default</button>
            <button className="btn btn-lg">Large</button>
            <button className="btn btn-xl">Xlarge</button>
            <button className="btn btn-wide">Wide</button>
          </div>
          <div className="divider" />
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center">
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-disabled">Disabled</button>
          </div>
          <div className="divider" />
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center">
            <button className="btn btn-soft">Default</button>
            <button className="btn btn-soft btn-primary">Primary</button>
            <button className="btn btn-soft btn-secondary">Secondary</button>
            <button className="btn btn-soft btn-accent">Accent</button>
            <button className="btn btn-soft btn-info">Info</button>
            <button className="btn btn-soft btn-success">Success</button>
            <button className="btn btn-soft btn-warning">Warning</button>
            <button className="btn btn-soft btn-error">Error</button>
          </div>
          <div className="divider" />
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center">
            <button className="btn btn-outline">Default</button>
            <button className="btn btn-outline btn-primary">Primary</button>
            <button className="btn btn-outline btn-secondary">Secondary</button>
            <button className="btn btn-outline btn-accent">Accent</button>
            <button className="btn btn-outline btn-info">Info</button>
            <button className="btn btn-outline btn-success">Success</button>
            <button className="btn btn-outline btn-warning">Warning</button>
            <button className="btn btn-outline btn-error">Error</button>
          </div>
          <div className="divider" />
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center">
            <button className="btn btn-dash">Default</button>
            <button className="btn btn-dash btn-primary">Primary</button>
            <button className="btn btn-dash btn-secondary">Secondary</button>
            <button className="btn btn-dash btn-accent">Accent</button>
            <button className="btn btn-dash btn-info">Info</button>
            <button className="btn btn-dash btn-success">Success</button>
            <button className="btn btn-dash btn-warning">Warning</button>
            <button className="btn btn-dash btn-error">Error</button>
          </div>
          <div className="divider" />
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center">
            <button className="btn btn-block">block</button>
          </div>
          <div className="divider" />
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center">
            <button className="btn btn-square">
              <HeartIcon />
            </button>
            <button className="btn btn-circle">
              <HeartIcon />
            </button>
            <button className="btn btn-square">
              <span className="loading loading-spinner"></span>
            </button>
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
