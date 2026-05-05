"use client";

import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { AutoComplete, MultiSelect } from "@progress/kendo-react-dropdowns";
import { ChevronDownIcon, MailIcon, SearchIcon, XIcon } from "lucide-react";

export default function Page() {
  const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];
  const frameworks2 = [
    { label: "Next.js", value: "nextjs" },
    { label: "SvelteKit", value: "sveltekit" },
    { label: "Nuxt.js", value: "nuxtjs" },
    { label: "Remix", value: "remix" },
    { label: "Astro", value: "astro" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="font-title font-bold text-3xl">Forms</h1>
      <div className="grid grid-1 sm:grid-cols-2 gap-4 items-start">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title">Quick Example</h2>

            <Input type="text" />
            <Textarea placeholder="Bio" />
            <div className="relative flex">
              <div className="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4">
                <XIcon className="size-3.5" />
                <ChevronDownIcon className="size-3.5" />
              </div>
            </div>
            <InputGroup>
              <InputGroupInput placeholder="My Search..."></InputGroupInput>

              {/* <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>ioi
              <InputGroupAddon align="inline-end">
                <MailIcon />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <XIcon className="size-3.5" />
              </InputGroupAddon> */}
              <InputGroupAddon align="inline-end">
                <XIcon className="size-3.5" />
                <ChevronDownIcon className="size-3.5" />
                {/* </button> */}
              </InputGroupAddon>
            </InputGroup>

            <label className="input w-full">
              <SearchIcon />
              <input type="search" className="grow" placeholder="Search" />
              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
              <button className="btn btn-xs btn-ghost">
                <ChevronDownIcon className="size-4" />
              </button>
            </label>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <InputGroup>
                <InputGroupInput placeholder="Search ..." />
                <InputGroupAddon>
                  {/* <InputGroupText>0/280</InputGroupText> */}
                  <MailIcon />
                </InputGroupAddon>
                {/* <input type="text" className="grow" placeholder="Search" /> */}
              </InputGroup>

              <label className="input validator w-full">
                <div>
                  <MailIcon />
                </div>
                <input
                  type="email"
                  className=""
                  placeholder="mail@site.com"
                  required
                />
              </label>

              <div className="join">
                <input type="text" className="input join-item" />
                <button className="btn join-item">Join</button>
              </div>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input  w-full"
                placeholder="Enter password"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Tel</legend>
              <input
                type="tel"
                className="input w-full"
                placeholder="Enter Tel"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Disabled</legend>
              <input
                type="text"
                className="input w-full "
                placeholder="Can't touch this"
                disabled
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Pick a file</legend>
              <input type="file" className="file-input w-full" />
              <label className="label">Max size 2MB</label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Textarea</legend>
              <textarea
                className="textarea w-full"
                placeholder="bio"
              ></textarea>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Datetime</legend>
              <input
                type="datetime-local"
                className="input w-full "
                placeholder="Enter password"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input w-full">
                <span className="label">https://</span>
                <input type="text" placeholder="URL" />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input w-full">
                <SearchIcon />
                <input type="search" placeholder="Search" />
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input w-full">
                Path
                <input type="text" placeholder="src/app/" />
                <span className="badge badge-neutral badge-xs">Optional</span>
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend>MultiSelect</legend>

              <label htmlFor="" className="input w-full pl-1">
                <MultiSelect
                  placeholder="Placeholder"
                  textField="label"
                  dataItemKey="value"
                  data={frameworks2}
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend>Autocomplete</legend>
              <label className="input w-full pl-1">
                <AutoComplete
                  placeholder="Placeholder"
                  data={frameworks2}
                  textField="label"
                  dataItemKey="value"
                />
              </label>
            </fieldset>

            <form>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Label</legend>
                <div className="join">
                  <div className="w-full">
                    <label className="input w-full validator join-item">
                      <MailIcon />
                      <input
                        type="email"
                        className="w-full"
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
          </div>
        </div>
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title">Size</h2>
            <input
              type="text"
              placeholder="Xsmall"
              className="input input-xs w-full"
            />
            <input
              type="text"
              placeholder="Small"
              className="input input-sm w-full"
            />
            <input
              type="text"
              placeholder="Medium"
              className="input input-md w-full"
            />
            <input
              type="text"
              placeholder="Large"
              className="input input-lg w-full"
            />
            <input
              type="text"
              placeholder="Xlarge"
              className="input input-xl w-full"
            />

            <div className="divider" />
            <div className="flex flex-row gap-2">
              <div className="w-[20%]">
                <input type="text" placeholder="20%" className="input w-full" />
              </div>
              <div className="w-[30%]">
                <input type="text" placeholder="30%" className="input w-full" />
              </div>
              <div className="w-[50%]">
                <input type="text" placeholder="50%" className="input w-full" />
              </div>
            </div>
            <div className="divider" />

            <input
              type="text"
              placeholder="neutral"
              className="input input-neutral w-full"
            />
            <input
              type="text"
              placeholder="Primary"
              className="input input-primary w-full"
            />
            <input
              type="text"
              placeholder="Secondary"
              className="input input-secondary w-full"
            />
            <input
              type="text"
              placeholder="Accent"
              className="input input-accent w-full"
            />

            <input
              type="text"
              placeholder="Info"
              className="input input-info w-full"
            />
            <input
              type="text"
              placeholder="Success"
              className="input input-success w-full"
            />
            <input
              type="text"
              placeholder="Warning"
              className="input input-warning w-full"
            />
            <input
              type="text"
              placeholder="Error"
              className="input input-error w-full"
            />

            <div className="divider" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label w-full">
                  <input type="checkbox" className="checkbox" />
                  Checkbox
                </label>
                <label className="label w-full">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Checkbox checked
                </label>
                <label className="label w-full">
                  <input type="checkbox" disabled className="checkbox" />
                  Checkbox disabled
                </label>
                <label className="label w-full">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  Checkbox primary
                </label>
              </div>
              <div>
                <label className="label w-full">
                  <input type="radio" name="radio" className="radio" />
                  Radio
                </label>
                <label className="label w-full">
                  <input
                    type="radio"
                    name="radio"
                    className="radio"
                    defaultChecked
                  />
                  Radio checked
                </label>
                <label className="label w-full">
                  <input type="radio" name="radio" className="radio" disabled />
                  Radio disabled
                </label>
                <label className="label w-full">
                  <input
                    type="radio"
                    name="radio"
                    className="radio radio-primary"
                  />
                  Radio primary
                </label>
              </div>
            </div>

            <div className="divider" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <select defaultValue="Pick a color" className="select">
                  <option disabled={true}>Pick a color</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </div>
              <div>
                <select defaultValue="Pick a color" className="select" disabled>
                  <option disabled={true}>Pick a color</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </div>
            </div>

            <div className="divider" />

            <label className="label">
              <input type="checkbox" defaultChecked className="select" />
              Toggle
            </label>
            <label className="label">
              <input type="checkbox" className="toggle" disabled />
              Toggle disabled
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
