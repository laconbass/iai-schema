# iai-schema

iai schema is a high-level interface meant to define and validate data structures.

It has been designed and crafted to be used widely along the [iai modules], although it can be used as a stand-alone library and be integrated with any other tool.

[iai modules]: http://npmjs.org/search?q=iai

## How to install

From `npm`:

    npm install iai-schema --save

Optionally save it, as usual.

## Convention notes about data validation

> **DISCLAIMER:**
> This notes do not apply until a working software is released.
> The actual work and roadmap includes defining this convention so it's
> not closed.

*Validation* is defined as the action of performing asynchronous checks on
some input data to determine if it's valid, resulting an error or the
cleaned data.

The syntax is: `validate( input, callback(error || null, data) )`

The *validation* action is decoupled within an Object structure, following
the *Composite* design pattern:

A **Validator** object is a `Function` object that performs validations. It's
the *Component* on a composite-like hirearchy of validators. It's responsible
of abstrancting the *validation* interface, decoupling it from possible
implementations.

A **Field** object is a `Validator` meant to be a *Leaf* on a composite-like
hiearchy of validators. It's responsible of the **type validation** for the
input it receives.

A **Schema** object is a `Validator` meant to be a *Composite* on a
composite-like hiearchy of validators. It's responsible of the **semantic
validation** within the structure it represents.

By convention, each enumerable property for a `Validator` object , being it
owned or inherited, represents either:

   - A parameter for type validation, on Fields.
   - A field, on Schemas.
