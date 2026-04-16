import { MailIcon, SearchIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="font-title font-bold text-3xl">Forms</h1>
      <div className="grid grid-1 sm:grid-cols-2 gap-4">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title">Quick Example</h2>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <label className="input validator">
                <MailIcon />
                <input
                  type="email"
                  className="grow"
                  placeholder="mail@site.com"
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input input-primary"
                placeholder="Enter password"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Tel</legend>
              <input
                type="tel"
                className="input input-primary"
                placeholder="Enter Tel"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Disabled</legend>
              <input
                type="text"
                className="input input-primary"
                placeholder="Can't touch this"
                disabled
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Pick a file</legend>
              <input type="file" className="file-input" />
              <label className="label">Max size 2MB</label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Textarea</legend>
              <textarea className="textarea" placeholder="bio"></textarea>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="datetime-local"
                className="input input-primary"
                placeholder="Enter password"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input">
                <span className="label">https://</span>
                <input type="text" placeholder="URL" />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input">
                <SearchIcon />
                <input type="search" className="grow" placeholder="Search" />
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input">
                Path
                <input type="text" className="grow" placeholder="src/app/" />
                <span className="badge badge-neutral badge-xs">Optional</span>
              </label>
            </fieldset>

            <form>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Label</legend>
                <div className="join">
                  <div>
                    <label className="input validator join-item">
                      <MailIcon />
                      <input
                        type="email"
                        placeholder="mail@site.com"
                        required
                      />
                    </label>
                    <div className="validator-hint hidden">
                      Enter valid email address
                    </div>
                  </div>
                  <button className="btn btn-neutral join-item">Join</button>
                </div>
              </fieldset>
            </form>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input validator">
                <MailIcon />
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </fieldset>
          </div>
        </div>
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title">Alert</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
