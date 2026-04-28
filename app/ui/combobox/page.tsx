"use client";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { useForm } from "@tanstack/react-form";

export default function Page() {
  const anchor = useComboboxAnchor();
  const form = useForm({
    defaultValues: {
      fruit: null as Fruit | null,
      foo: "",
      fruits: [] as Fruit[],
    },
    onSubmit: ({ value }) => {
      console.log("onSubmit", value);
    },
  });

  return (
    <>
      <div className="grid grid-1 md:grid-cols-2">
        <div className="card shadow">
          <div className="card-body">
            <div className="card-title">Combobox</div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <p className="text-sm">See console logs for submitted values.</p>
              <form.Field name="foo">
                {(field) => {
                  return (
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Foo</legend>
                      <input
                        type="text"
                        className="input w-full"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </fieldset>
                  );
                }}
              </form.Field>

              <form.Field name="fruit">
                {(field) => {
                  return (
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Choose Fruit</legend>
                      <Combobox
                        items={fruits}
                        value={field.state.value}
                        onValueChange={(value) => field.handleChange(value)}
                      >
                        <ComboboxInput placeholder="Pick" showClear />
                        <ComboboxContent className="shadow">
                          <ComboboxEmpty>No fruit</ComboboxEmpty>
                          <ComboboxList>
                            {(item: Fruit) => (
                              <ComboboxItem key={item.value} value={item}>
                                {item.label}
                              </ComboboxItem>
                            )}
                          </ComboboxList>
                        </ComboboxContent>
                      </Combobox>
                    </fieldset>
                  );
                }}
              </form.Field>

              <form.Field name="fruits">
                {(field) => (
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Choose Fruits</legend>
                    <Combobox
                      multiple
                      items={fruits}
                      value={field.state.value}
                      onValueChange={(fruits) => {
                        field.handleChange(fruits);
                      }}
                    >
                      <ComboboxChips ref={anchor}>
                        <ComboboxValue>
                          {(fruits: Fruit[]) => {
                            return fruits.map((fruit: Fruit) => (
                              <ComboboxChip key={fruit.value}>
                                {fruit.label}
                              </ComboboxChip>
                            ));
                          }}
                        </ComboboxValue>
                        <ComboboxChipsInput />
                      </ComboboxChips>
                      <ComboboxContent className="shadow" anchor={anchor}>
                        <ComboboxEmpty>No fruit</ComboboxEmpty>
                        <ComboboxList>
                          {(item: Fruit) => (
                            <ComboboxItem key={item.value} value={item}>
                              {item.label}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                  </fieldset>
                )}
              </form.Field>

              <div className="card-actions justify-end">
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                >
                  {([canSubmit, isSubmitting]) => {
                    return (
                      <button type="submit" className="btn btn-neutral">
                        Submit
                      </button>
                    );
                  }}
                </form.Subscribe>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

interface Fruit {
  label: string;
  value: string;
}

const fruits: Fruit[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Grape", value: "grape" },
  { label: "Mango", value: "mango" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Raspberry", value: "raspberry" },
  { label: "Blackberry", value: "blackberry" },
  { label: "Cherry", value: "cherry" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
  { label: "Plum", value: "plum" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Cantaloupe", value: "cantaloupe" },
  { label: "Honeydew", value: "honeydew" },
  { label: "Papaya", value: "papaya" },
  { label: "Guava", value: "guava" },
  { label: "Lychee", value: "lychee" },
  { label: "Pomegranate", value: "pomegranate" },
  { label: "Apricot", value: "apricot" },
  { label: "Grapefruit", value: "grapefruit" },
  { label: "Passionfruit", value: "passionfruit" },
];
