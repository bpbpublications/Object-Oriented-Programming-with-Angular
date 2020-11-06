    public void ConfigureServices(IServiceCollection services)
    {
        services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

        services.AddScoped<IMyDependency, MyDependency>();
        services.AddTransient<IOperationTransient, Operation>();
        services.AddScoped<IOperationScoped, Operation>();
        services.AddSingleton<IOperationSingleton, Operation>();
        services.AddSingleton<IOperationSingletonInstance>(new Operation(Guid.Empty));

        // OperationService depends on each of the other Operation types.
        services.AddTransient<OperationService, OperationService>();
    }