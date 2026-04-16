"use client";

import { CheckIcon, InfoIcon, TriangleAlertIcon } from "lucide-react";
import * as React from "react";
import { useRef } from "react";

export default function Page() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div className="space-y-4">
      <h1 className="font-title font-bold text-3xl">UI Components</h1>

      <div className="card shadow">
        <div className="card-body">
          <div className="grid grid-flow-col gap-2">
            <div className="rounded">
              <div className="bg-primary text-primary-content p-4">
                Active content
              </div>
              <div className="bg-primary-content text-primary p-4">
                Disabled / secondary content
              </div>
            </div>
            <div className="rounded">
              <div className="bg-secondary text-secondary-content p-4">
                Active content
              </div>
              <div className="bg-secondary-content text-secondary p-4">
                Disabled / secondary content
              </div>
            </div>
            <div className="rounded">
              <div className="bg-accent text-accent-content p-4">
                Active content
              </div>
              <div className="bg-accent-content text-accent p-4">
                Disabled / secondary content
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn" onClick={() => ref.current?.showModal()}>
        open modal
      </button>
      <dialog ref={ref} className="modal" id="my-modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">Alerts</h2>
          <div role="alert" className="alert alert-info">
            <InfoIcon />
            <span>New software update available.</span>
          </div>

          <div role="alert" className="alert alert-success">
            <CheckIcon />
            <span>Your purchase has been confirmed!</span>
          </div>

          <div role="alert" className="alert alert-warning">
            <TriangleAlertIcon />
            <span>Warning! Check your input.</span>
          </div>

          <div role="alert" className="alert alert-error">
            <TriangleAlertIcon />
            <span>Error! Task failed successfully.</span>
          </div>

          <div role="alert" className="alert alert-info alert-soft">
            <span>12 unread messages. Tap to see.</span>
          </div>

          <div role="alert" className="alert alert-info alert-outline">
            <span>12 unread messages. Tap to see.</span>
          </div>

          <div role="alert" className="alert alert-info alert-dash">
            <span>12 unread messages. Tap to see.</span>
          </div>

          <div
            role="alert"
            className="alert alert-vertical sm:alert-horizontal"
          >
            <InfoIcon className="text-info" />
            <div>
              <h3 className="font-bold">New message!</h3>
              <div className="text-xs">You have 1 unread message</div>
            </div>
            <div className="flex gap-1">
              <button className="btn btn-sm">Deny</button>
              <button className="btn btn-sm btn-primary">Accept</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">Progress</h2>
          <progress className="progress " value={5} max="100"></progress>
          <progress
            className="progress progress-primary"
            value="10"
            max="100"
          ></progress>
          <progress
            className="progress progress-secondary"
            value="40"
            max="100"
          ></progress>
          <progress
            className="progress progress-accent"
            value="70"
            max="100"
          ></progress>
          <progress
            className="progress progress-neutral"
            value="100"
            max="100"
          ></progress>
          <progress
            className="progress progress-info"
            value="100"
            max="100"
          ></progress>
          <progress
            className="progress progress-success"
            value="100"
            max="100"
          ></progress>
          <progress
            className="progress progress-warning"
            value="100"
            max="100"
          ></progress>
          <progress
            className="progress progress-error"
            value="100"
            max="100"
          ></progress>
          <progress className="progress"></progress>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">Accordion</h2>
          <div className="join join-vertical">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">
                How do I create an account?
              </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                I forgot my password. What should I do?
              </div>
              <div className="collapse-content text-sm">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
